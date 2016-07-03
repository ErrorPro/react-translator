# React plugin for translations and multi-languages applications.
This is a simple plugin for using multi languages in your project.
## Install
    npm install react-translator --save

## Example
This prugin requires `react` and `redux` libraries.
First of all we need to add a reducer to our store:

    createStore(
      combineReducers({...reducers, lang: translatorReducer('ru')})
    )
the name of reducer should be `lang`.

Use the plugin in your component:

    export default compose(
      connect(
        null,
        { changeLanguage },
      ),
      translator({
        foo: {
          ru: 'Привет',
          en: 'Hello',
          sp: 'Hola',
        }
      }),
    )(MyComponent)

Use your keys as props in your component:

    <div> {this.props.foo} </div>
    <button onClick={() => this.props.changeLanguage('en')}>en</button>
    <button onClick={() => this.props.changeLanguage('ru')}>ru</button>
    <button onClick={() => this.props.changeLanguage('sp')}>sp</button>
