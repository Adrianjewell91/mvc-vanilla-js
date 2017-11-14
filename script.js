function View(controller) {
  this.controller = controller;
  this.heading = document.getElementById('heading');
}

function Model() {
  this.heading = "Hello";
}

function Controller(model) {
  const self = this;
  this.model = model;
  
  this.handleEvent = function(e){
    e.stopPropagation();
    switch(e.type){
      case 'click':
        self.clickHandler(e.target)
        break;
      default:
        console.log(e.target);
    }
  }
  
  this.modelGetHeading = function() {
    return self.model.heading;
  }
  
  this.clickHandler = function(target){
    self.model.heading = "World";
    target.innerText = self.getModelHeading();
  }
}