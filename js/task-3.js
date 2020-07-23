
const findBestEmployee = function(employees) {
    const entriesEmployee = Object.entries(employees);
    const employeeMaxValue = Math.max(... Object.values(employees));
    let bestEmployee;
    for (const worker in entriesEmployee){
        if(entriesEmployee[worker][1] === employeeMaxValue){
            bestEmployee = entriesEmployee[worker];
        }else{
        continue;
        } 
    }
    return bestEmployee[0]
};


  /*
   * Вызовы функции для проверки работоспособности твоей реализации.
   */
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux