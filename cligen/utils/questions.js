const ask  = require('./ask');

module.exports = async () => {
    const name = await ask({ 
        message: `please enter CLI name`,
        hint: `(camel case only)`,
    });
    
    const command = await ask({ 
        message: `please enter CLI command`,
        hint: `(optional)`,
      });
    
    const description = await ask({ 
        message: `please enter description`  
    });
    
    const version = await ask({ 
        message: `please enter initial version`,
        initial: `0.0.0`  
    });
    
    const license = await ask({ 
        message: `please the license`,
        initial: `UNLICENSED`  
    });
    
    const authorName = await ask({ 
        message: `please enter the author's name`  
    });
    
    const authorEmail = await ask({ 
        message: `please enter the author's email address`  
    });
    
    const authorUrl = await ask({ 
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
