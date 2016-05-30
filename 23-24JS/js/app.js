require(
  ['lib/jquery-1.12.3.js','lib/tmpl.js','model','view','controller'],
  function(){
    $(function(){
      	var arr = ['test1', 'test2', 'test3'];
		var  model = new Model(arr);
		var view = new View(model);
		var controller = new Controller(model, view);
    });
  }
);