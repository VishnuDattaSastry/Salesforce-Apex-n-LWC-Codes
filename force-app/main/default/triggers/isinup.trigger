trigger isinup on Contact (before insert, before update) {

for (Contact abc: Trigger.New) {
     If (trigger.isinsert) {
    abc.description= 'Contact created successfully with Multiple Trigger';
     } else if (Trigger.isupdate) {
     abc.description= 'contact updated successfully by '+ userinfo.getusername();
     } 
  }
}