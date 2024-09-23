const photocopier = (blueprint) => {
    const copyOfBluePrint = {...blueprint}
    copyOfBluePrint.isCopy = true
    return copyOfBluePrint
};

module.exports = photocopier;
