export default {
    "presets": [
        "react-app"      
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