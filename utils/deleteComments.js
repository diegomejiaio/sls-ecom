const fs = require('fs');

function removeCommentsFromFile(filePath) {
    try {
        // Read the file
        const fileContent = fs.readFileSync(filePath, 'utf8');

        // Remove comments and empty lines
        const updatedContent = fileContent.split('\n').map(line => {
            const commentIndex = line.indexOf('#');
            if (commentIndex !== -1) {
                return line.slice(0, commentIndex);
            }
            return line;
        }).filter(line => line.trim() !== '').join('\n');

        // Write the updated content back to the file
        fs.writeFileSync(filePath, updatedContent, 'utf8');

        console.log('Comments removed successfully!');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Usage: node deleteComments.js serverless.yml
const filePath = process.argv[2];
removeCommentsFromFile(filePath);