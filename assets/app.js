var MyComponent = React.createClass({
  render: function() {
    return  <div>
              <h1> {this.props.text} </h1>
              <p> {this.props.children} </p>
            </div>;
  }
});

ReactDOM.render(<div>
                <MyComponent text="Hello">
                  This is a hello.
                </MyComponent>
                <MyComponent text="Hi">
                  This is a Hi.
                </MyComponent>
                <MyComponent text="Bye">
                  This is a Bye.
                </MyComponent>
                </div>, document.getElementById('container'));