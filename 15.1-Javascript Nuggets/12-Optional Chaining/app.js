const people = [
  {
    name: "bob",
    location: { street: "123 main street", timeZone: { offset: "+7:00" } },
  },
  {
    name: "peter",
    location: { street: "123 pine street" },
  },
  {
    name: "susan",
    location: { street: "123 apple street", timeZone: { offset: "+8:00" } },
  },
];
people.forEach((person)=>{
    // console.log(person.name);
    // console.log(person.location.timeZone.offset);
    // console.log(person.location && person.location.timeZone && person.location.timeZone.offset);

    console.log(person?.location?.timeZone?.offset || 'Error');
})