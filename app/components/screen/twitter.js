import Twit from 'twit'

import config from '../config/twitter_config'
import React from 'react'

class Twitter extends React.Component{
    constructor(){
        super()
        let T = Twit(config)
    }
}

export default Twitter

