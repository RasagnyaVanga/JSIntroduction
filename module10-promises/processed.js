async function getProcessedData(url) {
    let data;
    try {
        data = await downloadData(url); //returns download promise
    }
    catch (error) {
        data = await downloadFallbackData(url); //if it fails, it returns fallback promise
    }
    let result = await processDataInWorker(data); // pass the rendered promise output to the new promise. 
    return result;
}