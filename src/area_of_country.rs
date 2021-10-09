pub fn area_of_country(name:String,area:i64) -> String{
    
}
#[cfg(test)]
mod tests {
    use super::area_of_country;
    #[test]
    fn test_area_of_country() {
        assert_eq!(area_of_country("USA", 9372610), "USA is 6.29% of the total world's landmass");
        assert_eq!(area_of_country("Russia", 17098242), "Russia is 11.48% of the total world's landmass");
        assert_eq!(area_of_country("Iran", 1648195), "Iran is 1.11% of the total world's landmass");
        assert_eq!(area_of_country("India", 3287590), "India is 2.21% of the total world's landmass");
        assert_eq!(area_of_country("China", 9706961), "China is 6.52% of the total world's landmass");
        assert_eq!(area_of_country("Yemen", 527968), "Yemen is 0.35% of the total world's landmass");
        assert_eq!(area_of_country("Switzerland", 41284), "Switzerland is 0.03% of the total world's landmass");    }
}