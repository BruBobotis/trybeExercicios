const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const theNight = (object, newKey, value) => {
    object[newKey] = value;
  };
  theNight(lesson2,'turno','noite');

  const theKeys = (object) => Object.keys(object);

  const theLength = (object) => Object.keys(object).length;

  const theValues = (object) => Object.values(object);

  const allLessons = Object.assign([],{ lesson1,lesson2,lesson3 });
  
  const allStudents = (object) => {
    let total = 0;
    const keys = Object.keys(object);
    for (index in keys) {
      total += object[keys[index]].numeroEstudantes; 
    }
    return total; 
  };
  console.log(allStudents(allLessons));

  const verifyPair = (object, key, value) => {
    const entries = Object.entries(object);
    let exists = false;
    for(index in entries){
        if (entries[index][0] === key && entries[index][1] === value){
            exists = true;
        }
    }
    return exists;
  };
  console.log(verifyPair(lesson2,'Carlos'));

  