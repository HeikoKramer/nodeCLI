const ask  = require('./ask');

module.exports = async () => {
    const name = await ask({
        name: `name`, 
        message: `please enter CLI name`,
        hint: `(camel case only)`,
    });
    
    const command = await ask({
        name: `command`, 
        message: `please enter CLI command`,
        hint: `(optional)`,
      });
    
    const description = await ask({
        name: `description`, 
        message: `please enter description`  
    });
    
    const version = await ask({
        name: `version`, 
        message: `please enter initial version`,
        initial: `0.0.0`  
    });
    
    const license = await ask({
        name: `license`, 
        message: `please the license`,
        initial: `UNLICENSED`  
    });
    
    const authorName = await ask({
        name: `authorName`, 
        message: `please enter the author's name`  
    });
    
    const authorEmail = await ask({
        name: `authorEmail`, 
        message: `please enter the author's email address`  
    });
    
    const authorUrl = await ask({
        name: `authorUrl`, 
        message: `please enter the author's website`  
    });
    
    const vars = { 
        name,
        command: command ? command : name,
        description,
        version,
        license,
        authorName,
        authorEmail,
        authorUrl
    };

    return vars;
};
