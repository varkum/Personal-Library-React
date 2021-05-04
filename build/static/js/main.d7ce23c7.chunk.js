(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{33:function(e,t){e.exports={backend:"https://Personal-Library-Backend.varkum.repl.co"}},35:function(e,t,a){e.exports=a(65)},40:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(17),s=a.n(l),r=a(7),c=a(8),i=a(10),m=a(9),u=(a(18),a(19)),d=a(5),h=a(33),b=a.n(h),p=(a(40),a(12)),g=a.n(p),v=a(3),E=a(16),f={headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*",Authorization:localStorage.getItem("jwt")}},k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={title:"",author:"",rating:0,tags:"",comments:""},n.onChangeTitle=n.onChangeTitle.bind(Object(v.a)(n)),n.onChangeAuthor=n.onChangeAuthor.bind(Object(v.a)(n)),n.onChangeRating=n.onChangeRating.bind(Object(v.a)(n)),n.onChangeTags=n.onChangeTags.bind(Object(v.a)(n)),n.onChangeComments=n.onChangeComments.bind(Object(v.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n.handleClose=n.handleClose.bind(Object(v.a)(n)),n}return Object(c.a)(a,[{key:"onChangeTitle",value:function(e){this.setState({title:e.target.value})}},{key:"onChangeAuthor",value:function(e){this.setState({author:e.target.value})}},{key:"onChangeRating",value:function(e){this.setState({rating:e.target.value})}},{key:"onChangeTags",value:function(e){this.setState({tags:e.target.value})}},{key:"onChangeComments",value:function(e){this.setState({comments:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={title:this.state.title,author:this.state.author,rating:this.state.rating,tags:this.state.tags,comments:this.state.comments};console.log(t),g.a.post("https://personal-library-backend.varkum.repl.co/api/books",t,f).then((function(e){return console.log(e.data)})),window.location="/books"}},{key:"handleClose",value:function(e){window.location="/books"}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-row mr-auto ml-auto"},o.a.createElement("div",{className:"form-group col-md-7"},o.a.createElement("label",{for:"inputTitle"},"Title"),o.a.createElement("input",{type:"text",required:!0,className:"form-control",id:"inputTitle",placeholder:"Title",value:this.state.title,onChange:this.onChangeTitle})),o.a.createElement("div",{className:"form-group col-md-4"},o.a.createElement("label",{for:"inputAuthor"},"Author"),o.a.createElement("input",{type:"text",required:!0,className:"form-control",id:"inputAuthor",placeholder:"Author",value:this.state.author,onChange:this.onChangeAuthor})),o.a.createElement("div",{className:"form-group col-md-1"},o.a.createElement("label",{for:"inputRating"},"Rating/10"),o.a.createElement("input",{type:"number",required:!0,className:"form-control",id:"inputRating",value:this.state.rating,onChange:this.onChangeRating}))),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{for:"inputTags"},"Tags & Categories"),o.a.createElement("input",{type:"text",className:"form-control",id:"inputTags",placeholder:"Tags",value:this.state.tags,onChange:this.onChangeTags})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{for:"comments"},"Comments"),o.a.createElement("textarea",{id:"comments",placeholder:"Comments...",value:this.state.comments,onChange:this.onChangeComments})),o.a.createElement("div",{className:"row"},o.a.createElement("button",{type:"submit",className:"btn btn-primary mr-3 ml-3"},"Add book"))))}}]),a}(o.a.Component),C={headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*",Authorization:localStorage.getItem("jwt")}},w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={showForm:!1},n.handleOpenModal=n.handleOpenModal.bind(Object(v.a)(n)),n.handleCloseModal=n.handleCloseModal.bind(Object(v.a)(n)),n.handleDelete=n.handleDelete.bind(Object(v.a)(n)),n}return Object(c.a)(a,[{key:"handleOpenModal",value:function(){this.setState({showForm:!0})}},{key:"handleCloseModal",value:function(){this.setState({showForm:!1})}},{key:"handleDelete",value:function(){g.a.delete("https://personal-library-backend.varkum.repl.co/api/books",C).then((function(e){return console.log(e.data)})),window.location="/books"}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"row mt-3"},o.a.createElement("button",{className:"btn btn-info mr-3 ml-2",onClick:this.handleOpenModal},"Add Book"),o.a.createElement("button",{className:"btn btn-danger",onClick:this.handleDelete},"Delete All")),o.a.createElement(E.a,{show:this.state.showForm,onHide:this.handleCloseModal,size:"lg","aria-labelledby":"add-book",centered:!0},o.a.createElement(E.a.Header,{closeButton:!0},o.a.createElement(E.a.Title,{id:"add-book"},"Add New Book")),o.a.createElement(E.a.Body,null,o.a.createElement(k,null))))}}]),a}(o.a.Component),j={headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*",Authorization:localStorage.getItem("jwt")}},y=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={showInfo:!1,editComments:!1,comments:n.props.book.comments},n.handleOpenInfo=n.handleOpenInfo.bind(Object(v.a)(n)),n.handleCloseInfo=n.handleCloseInfo.bind(Object(v.a)(n)),n.handleDelete=n.handleDelete.bind(Object(v.a)(n)),n.handleEdit=n.handleEdit.bind(Object(v.a)(n)),n.handleComments=n.handleComments.bind(Object(v.a)(n)),n}return Object(c.a)(a,[{key:"handleOpenInfo",value:function(){this.setState({showInfo:!0})}},{key:"handleCloseInfo",value:function(){this.setState({showInfo:!1})}},{key:"handleDelete",value:function(){g.a.delete("https://personal-library-backend.varkum.repl.co/api/books/"+this.props.book.title,j).then((function(e){return console.log(e.data)})),window.location="/books"}},{key:"handleEdit",value:function(){this.setState({editComments:!this.state.editComments}),this.state.editComments&&g.a.post("https://personal-library-backend.varkum.repl.co/api/books/"+this.props.book.title+"/edit",{comments:this.state.comments},j).then((function(e){return console.log(e)}))}},{key:"handleComments",value:function(e){this.setState({comments:e.target.value})}},{key:"render",value:function(){var e=o.a.createElement("div",null,this.state.comments),t=o.a.createElement("div",null,o.a.createElement("textarea",{value:this.state.comments,onChange:this.handleComments}));return o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-block text-left",onClick:this.handleOpenInfo},o.a.createElement("div",{className:"row mt-4"},o.a.createElement("div",{className:"col-md"},this.props.book.title),o.a.createElement("div",{className:"col-md"},this.props.book.author),o.a.createElement("div",{className:"col-md"},this.props.book.rating),o.a.createElement("div",{className:"col-md"},this.props.book.tags))),o.a.createElement(E.a,{show:this.state.showInfo,onHide:this.handleCloseInfo,size:"lg","aria-labelledby":"book-info",centered:!0},o.a.createElement(E.a.Header,{closeButton:!0},o.a.createElement(E.a.Title,{id:"book-info"},this.props.book.title)),o.a.createElement(E.a.Body,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md"},o.a.createElement("p",null,o.a.createElement("b",null,"Author: ")," ",this.props.book.author)),o.a.createElement("div",{className:"col-md"},o.a.createElement("p",null,o.a.createElement("b",null,"Tags: ")," ",this.props.book.tags))),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("b",null,"Rating: ")," ",this.props.book.rating)),o.a.createElement("div",{className:"d-flex justify-content-between mb-2"},o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("b",null,"Comments:"))),o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-light mr-4",onClick:this.handleEdit},this.state.editComments?"Done":"Edit"))),this.state.editComments?t:e,o.a.createElement("button",{className:"btn btn-danger mt-3",onClick:this.handleDelete},"Delete book"))))}}]),a}(o.a.Component),O=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={books:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("".concat(this.props.config.backend,"/api/books"),{headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*",Authorization:localStorage.getItem("jwt")}}).then((function(t){e.setState({books:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.books.map((function(e){return o.a.createElement(y,{book:e,key:e.title})}));return o.a.createElement("div",{className:"container-fluid books"},o.a.createElement(w,null),o.a.createElement("div",{className:"mt-4"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md"},o.a.createElement("h4",null,"Title")),o.a.createElement("div",{className:"col-md"},o.a.createElement("h4",null,"Author")),o.a.createElement("div",{className:"col-md"},o.a.createElement("h4",null,"Rating")),o.a.createElement("div",{className:"col-md"},o.a.createElement("h4",null,"Tags"))),e))}}]),a}(o.a.Component),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleLogout=n.handleLogout.bind(Object(v.a)(n)),n}return Object(c.a)(a,[{key:"handleLogout",value:function(){localStorage.removeItem("jwt"),localStorage.removeItem("loggedIn"),window.location="/"}},{key:"render",value:function(){var e="";return localStorage.getItem("loggedIn")&&(e=o.a.createElement("button",{className:"btn btn-secondary",onClick:this.handleLogout},"Log out")),o.a.createElement("nav",{className:"navbar navbar-expand-md fixed-top navbar-dark bg-primary p-3"},o.a.createElement(u.b,{to:"/books",className:"navbar-brand h1"},"Personal Library"),o.a.createElement("div",{className:"container-fluid"},o.a.createElement("ul",{className:"nav navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(u.b,{to:"/books",className:"nav-link"},"All Books")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(u.b,{to:"/books/top",className:"nav-link"},"Top Rated"))),o.a.createElement("div",null,e)))}}]),a}(o.a.Component),S=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={books:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://personal-library-backend.varkum.repl.co/api/books/top",{headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*",Authorization:localStorage.getItem("jwt")}}).then((function(t){e.setState({books:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.books.map((function(e){return o.a.createElement(y,{book:e,key:e.title})}));return o.a.createElement("div",{className:"container-fluid books"},o.a.createElement("div",{className:"mt-4"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md"},o.a.createElement("h4",null,"Title")),o.a.createElement("div",{className:"col-md"},o.a.createElement("h4",null,"Author")),o.a.createElement("div",{className:"col-md"},o.a.createElement("h4",null,"Rating")),o.a.createElement("div",{className:"col-md"},o.a.createElement("h4",null,"Tags"))),e))}}]),a}(o.a.Component),T={headers:{"Content-Type":"application/json;charset=UTF-8","Access-Control-Allow-Origin":"*"}},A=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",msg:""},n.handleRegister=n.handleRegister.bind(Object(v.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n.inputUsername=n.inputUsername.bind(Object(v.a)(n)),n.inputPassword=n.inputPassword.bind(Object(v.a)(n)),n}return Object(c.a)(a,[{key:"inputUsername",value:function(e){this.setState({username:e.target.value})}},{key:"inputPassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleRegister",value:function(e){var t=this;e.preventDefault();var a={username:this.state.username,password:this.state.password};a.username&&a.password?g.a.post("https://Personal-Library-Backend.varkum.repl.co/users/register",a,T).then((function(e){localStorage.setItem("jwt",e.data.token),localStorage.setItem("loggedIn",!0),t.setState({msg:"Registered!"}),window.location="/books"})).catch((function(e){t.setState({msg:e.response.data.msg})})):this.setState({msg:"Please enter username and password!"})}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a={username:this.state.username,password:this.state.password};a.username&&a.password?g.a.post("https://Personal-Library-Backend.varkum.repl.co/users/login",a,T).then((function(e){localStorage.setItem("jwt",e.data.token),localStorage.setItem("loggedIn",!0),t.setState({msg:"Welcome ".concat(e.data.user.username)}),window.location="/books"})).catch((function(e){t.setState({msg:e.response.data.msg})})):this.setState({msg:"Please enter username and password!"})}},{key:"render",value:function(){return o.a.createElement("div",{className:"homePage"},o.a.createElement("div",{className:"loginBox mt-auto"},o.a.createElement("form",null,o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{for:"username"},"Username"),o.a.createElement("input",{id:"username",className:"form-control",value:this.state.username,onChange:this.inputUsername})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{for:"password"},"Password"),o.a.createElement("input",{type:"password",id:"password",className:"form-control",value:this.state.password,onChange:this.inputPassword}))),o.a.createElement("div",{className:"row"},o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-primary ml-3",type:"submit",onClick:this.handleSubmit},"Log in")),o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-primary ml-2 mr-4",onClick:this.handleRegister},"Register"))),o.a.createElement("p",{"mt-4":!0,className:"text-center"},this.state.msg)))}}]),a}(o.a.Component),I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=localStorage.getItem("loggedIn");return o.a.createElement(u.a,null,o.a.createElement("div",{className:"container-fluid"},o.a.createElement(N,null),o.a.createElement(d.d,null,o.a.createElement(d.b,{exact:!0,path:"/"},e?o.a.createElement(d.a,{to:"/books"}):o.a.createElement(A,null)),o.a.createElement(d.b,{exact:!0,path:"/books"},e?o.a.createElement(O,{config:b.a}):o.a.createElement(d.a,{to:"/"})),o.a.createElement(d.b,{path:"/books/top"},e?o.a.createElement(S,null):o.a.createElement(d.a,{to:"/"})))))}}]),a}(o.a.Component);s.a.render(o.a.createElement(I,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d7ce23c7.chunk.js.map