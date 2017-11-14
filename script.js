function View(controller) {
  this.controller = controller;
  this.heading = document.querySelector('#heading');
  this.heading.innerText = controller.getModelHeading();
  this.heading.addEventListener("click", controller);
}

function Model() {
  this.heading = "Hello";
}

function Controller(model) {
  const self = this;
  this.model = model;
  
  //Handle the incoming 'request', so to speak.
  this.handleEvent = function(e){
    e.stopPropagation();
    switch(e.type){
      case 'click':
        self.clickHandler(e.target)
        break;
      default:
        console.log(e.target);
    }
  };
  
  this.getModelHeading = function() {
    return self.model.heading;
  };
  
  //The action that changes the model.
  this.clickHandler = function(target){
    // switch(target.innerText) {
    //   case "Hello":
    //     self.model.heading = "World";
    //   default:
    //     self.model.heading = "Hello";
    // }
    self.model.heading = Math.random();
    target.innerText = self.getModelHeading();
  };
}

function main(){
  const model = new Model();
  const controller = new Controller(model);
  const view = new View(controller);
};

main();