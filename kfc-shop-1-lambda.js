exports.handler = async (event) => {
    console.log(JSON.stringify(event));
    const order = JSON.parse(event.Records[0].body);
    console.log('Received Order: ', order);
    console.log('Kfc Shop #1 Making Burger... ...');
    await sleep(5000);
};

function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}
