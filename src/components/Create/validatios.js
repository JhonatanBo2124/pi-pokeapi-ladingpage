const validations = (name, data) => {
    const numeros = new RegExp(/^([0-9])*$/);
    const url = new RegExp(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/)
    const errors = {}
    if((name === 'id' || name === 'height' || name === 'weight') && !numeros.test(data)){
        errors.error = `el ${name} debe ser un numero`;
    }
    if(name === 'name' && numeros.test(data)){
        errors.error = `el ${name} no puede contener numeros`
    }
    if(name === 'image' && !url.test(data)){
        errors.error = 'debe ser una url a la imagen'
    }
    return errors
}
export default validations