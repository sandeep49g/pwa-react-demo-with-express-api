export default {
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"      
    ],
    "plugins": ["jsx-control-statements"],
    "env": {
        "test": {
            "presets": [
                [
                    "@babel/preset-env",
                    {
                        "modules": "common.js"
                    }
                ],
                "@babel/preset-react"
            ]
        }
    }
};