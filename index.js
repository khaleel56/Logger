const express = require('express');
const { add } = require('winston');

const logger = require('./logger')

const app=express();

app.get('/', async(req, res)=>{
    logger.info("info")
    logger.error('error')
    logger.warn('warn')
    logger.debug('debug')
    logger.verbose('verbose')
    logger.silly('silly')
    const start = new Date();
    // const result=await addition((5,3),function ()=>{})
    const end = new Date();
    console.log(start.getTime(), end.getTime())
    logger.info(`duration, ${(start-end)}, ${result}`)
        res.send('welcome')
})

const addition=(x,y)=>{
    setTimeout(()=>console.log('sleep'),5000)
    return x+y
}
app.listen(3000, ()=>{
    logger.info('server running')
})