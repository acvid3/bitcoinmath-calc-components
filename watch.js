const fs = require('fs');
const path = require('path');

const writeFilesContent = (directoryPath, outputFilePath) => {
    if (!directoryPath || !outputFilePath) {
        console.error("Error: Both 'directoryPath' and 'outputFilePath' are required.");
        return;
    }

    const absoluteDirectoryPath = path.resolve(directoryPath);
    const absoluteOutputFilePath = path.resolve(outputFilePath);

    const output = fs.createWriteStream(absoluteOutputFilePath, { flags: 'w' });

    const ignoredFolders = ['node_modules', 'dist', 'tests'];
    const ignoredFiles = [absoluteOutputFilePath];

    let pendingOperations = 0;

    const readDirectory = (dirPath) => {
        pendingOperations++;
        fs.readdir(dirPath, (err, files) => {
            if (err) {
                console.error(`Error reading directory ${dirPath}:`, err);
                pendingOperations--;
                checkCompletion();
                return;
            }

            files.forEach((file) => {
                const filePath = path.join(dirPath, file);

                pendingOperations++;
                fs.stat(filePath, (err, stats) => {
                    if (err) {
                        console.error(`Error getting file info for ${filePath}:`, err);
                        pendingOperations--;
                        checkCompletion();
                        return;
                    }

                    const isHiddenFolder = file.startsWith('.');

                    if (stats.isDirectory() && !ignoredFolders.includes(file) && !isHiddenFolder) {
                        readDirectory(filePath);
                    } else if (stats.isFile() && !ignoredFiles.includes(filePath)) {
                        const fileExtension = path.extname(filePath);

                        if (['', '.php', '.js', '.jsx', '.ts'].includes(fileExtension)) {
                            pendingOperations++;
                            fs.readFile(filePath, 'utf8', (err, data) => {
                                if (err) {
                                    console.error(`Error reading file ${filePath}:`, err);
                                } else {
                                    output.write(`/**************[path: ${filePath}]***************/\n`);
                                    output.write(`${data}\n\n`);
                                }
                                pendingOperations--;
                                checkCompletion();
                            });
                        } else {
                            output.write(`/**************[path: ${filePath}]***************/\n`);
                        }
                    }
                    pendingOperations--;
                    checkCompletion();
                });
            });
            pendingOperations--;
            checkCompletion();
        });
    };

    const checkCompletion = () => {
        if (pendingOperations === 0) {
            output.end(() => {
                console.log(`File successfully written to ${absoluteOutputFilePath}`);
            });
        }
    };

    readDirectory(absoluteDirectoryPath);
};

const startPath = '/Users/andrewchekh/Documents/projects/nodejs/bitcoinmath-calc-components/';
const outputPath = '/Users/andrewchekh/Documents/projects/nodejs/bitcoinmath-calc-components/tests/bitcoinmath-calculators.txt';

writeFilesContent(startPath, outputPath);
