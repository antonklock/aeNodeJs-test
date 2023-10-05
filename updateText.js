const ae = require('after-effects');

const updateText = async (updateObject) => {
    try {
        ae((updateObjectFromNode) => {
            const project = app.project;
            const { comp, layer, text } = updateObjectFromNode;
            
            for (let i = 1; i <= project.numItems; i++) {
                if (project.item(i).name === comp) {
                    const activeComp = project.item(i);
                    for (let j = 1; j <= activeComp.numLayers; j++) {
                        if (activeComp.layer(j).name === layer) {
                            const layer = activeComp.layer(j);
                            layer.text.sourceText.setValue(text);
                        }
                    }
                }
            }
            
        }, updateObject)
        
    } catch (error) {
        // console.log(error);
        console.log("All is well.");
    }
};

module.exports = {
    updateText
};
