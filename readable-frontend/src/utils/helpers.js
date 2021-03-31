import React from 'react';
import { FaUserAstronaut,
     FaUserTie,
    FaUserNinja, 
    FaUserSecret, 
    FaUserGraduate, 
    FaUserNurse, 
    FaUserMd, 
    FaUserInjured, 
    FaUser
} from "react-icons/fa"

export function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
  }

function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
export function formatComment(parentId, body) {
    return {
        id: generateUID(),
        parentId,
        timestamp : Date.now(),
        body,
        author: selectAuthor(),
    }
}
function getRandomIndex(length) {
    return Math.floor(Math.random()*length)
}
function selectAuthor() {
    const adjectives = ['pretty', 'slutty', 'lover', 'flirty', 'foracious', 'grateful', 'acclaimed', 'amused', 'passionate', 'awsome', 'happy', 'devoted', 'pleased', 'dedicated', 'hardworking', 'fair', 'lonely', 'stressed', 'obsessed', 'attractive', 'ambitious', 'amazing', 'bewitched', 'brilliant', 'unique' ]
    const substantives = ['meat', 'tree', 'person', 'mother', 'student', 'dog', 'cat', 'fame', 'beauty', 'woman', 'man', 'hero', 'listener', 'nature', 'human', 'ghost', 'wizard', 'witch', 'sorcerer', 'vigilante', 'fairy', 'vampire', 'engineer', 'thing', 'worker', 'millenial', 'parent', 'citizen']

    const author = adjectives[getRandomIndex(adjectives.length)] + substantives[getRandomIndex(substantives.length)]
    return author

}

export function generateUserIcon(){
    const icons = [<FaUserAstronaut/>, <FaUser/>, <FaUserTie/>, <FaUserGraduate/>, <FaUserNinja/>, <FaUserNurse/>, <FaUserInjured/>, <FaUserMd/>, <FaUserSecret/>]
    const userIcon = icons[getRandomIndex(icons.length)]
    return userIcon
}