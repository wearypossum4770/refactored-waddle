export default function areaOfCountry(name, area){
    let landmass = Number.parseFloat((area/148_940_000)*100).toFixed(2)
    return `${name} is ${landmass}% of the total world's landmass`
}