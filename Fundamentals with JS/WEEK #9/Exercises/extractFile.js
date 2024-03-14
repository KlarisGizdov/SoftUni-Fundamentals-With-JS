function extractFile(path) {

    let pathParts = path.split('\\');
    let lastPart = pathParts.pop();

    let lastDotIdx = lastPart.lastIndexOf('.');
    let fileName = lastPart.slice(0, lastDotIdx);
    let fileExt = lastPart.slice(lastDotIdx + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')