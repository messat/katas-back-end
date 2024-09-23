const stackPhotocopier = (blueprintsArr) => {
    const copyOfBlueprints = blueprintsArr.map((blueprint)=> {
        return {...blueprint}
    })
    const copiedBlueprint = copyOfBlueprints.map((copy)=> {
        copy.isCopy = true
        return copy
    })
    return copiedBlueprint
};

module.exports = stackPhotocopier;
