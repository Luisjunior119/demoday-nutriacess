interface ENV {
    host: string;
}

const env: ENV = {
    host: process.env.REACT_APP_HOST || ''
}

export default env;