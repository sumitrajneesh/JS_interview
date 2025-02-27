const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const retailCompanis = companies.filter(company => company.category === 'Retail');


  console.log(retailCompanis);
  const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <1990));
  console.log(eightiesCompanies);

  const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
  console.log(lastedTenYears)

  //map 
  /**
   * Created array of companay names
   * it gives new array
   */

   const companyNames = companies.map(function(company) {
       return company.name
   })

   console.log(companyNames)

   const testMap = companies.map(function(company){
       return `${company.name} [${company.start} - ${company.end}]`
   })

   console.log(testMap)

   const testMap2 = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
   console.log(testMap2)

const ageMap = ages.map(age => Math.sqrt(age)).map(age => age * 2);

//sort
/**
 * Sort companies by strt year
 */

const sortedCompanies = companies.sort(function(c1,c2) {
    if(c1.start > c2.start){
        return 1;
    }else {
        return -1;
    }

})
console.log(sortedCompanies);

const sortedCompanies1 = companies.sort((a,b) => (a.start > b.start) ? 1 : -1)
console.log(sortedCompanies1)

const sortAge = ages.sort((a,b) => a - b)
console.log(sortAge)
