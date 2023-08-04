export function searchCustomer() {
    if(!localStorage['customer']) {
        localStorage['customer'] = '[]';
    }

   let customer =  localStorage['customer'];
   customer = JSON.parse(customer);
    return customer;
}

export function removeCustomer(id: string){
    let customer =  searchCustomer();
    let indice =customer.findIndex((customers: any) => customers.id == id)
    customer.splice(indice, 1);
    localStorage['customer'] = JSON.stringify(customer);
}

export function saveCustomer(customers:any) {
   let customer =  searchCustomer();
   if (customer.id){
    //editar
    let indice =customer.findIndex((c: any) => c.id == customers.id)
    customer[indice] = customers;
   }else{
    //nuevo
    customer.id = Math.round(Math.random() * 100000);
    customer.push(customers);
   }

   localStorage['customer'] = JSON.stringify(customer);
}

export function searchCustomerById(id: string) {
    let customer =  searchCustomer();
    return customer.find((customers: any) => customer.id == id);
 }

/*
    {
        id: 2,
        firstname: 'Laura',
        lastname: 'Hutson' ,
        email: 'canela23@gmail.com' ,
        phone: '11433241233' ,    
        addres: 'Avenida Mala Vida 321'
    }  
];   
*/