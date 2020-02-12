exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin":"*"
        },
        body: JSON.stringify({msg: 'Hello from my CLI-pushed custom AWS Lambda! (nice domain name BTW)'}),
    };
    return response;
};
