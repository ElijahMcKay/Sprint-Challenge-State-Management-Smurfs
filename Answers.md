- [ ] What problem does the context API help solve? 
      It helps eliminate the issue of drilling props down multiple levels to get data where you needed it to be. 

- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
      actions - an object that should be the only way to modify your state
      reducers - reducers are the logic that tells the state HOW to change when the action tells it to change
      store - the 'one source of truth' data provider for an entire application 

- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?
      App state is when you have data that is going to have to be used in other parts of the App, so you need to use ways to pass down props to every necessary component
      Component state is when you need to keep tr ack of state like in a form, but none of that other data necessarily needs to be used by other components.  

- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
      redux thunk gives us the ability to turn our action creator into a thunk, aka. a function that returns another function call.  

- [ ] What is your favorite state management system you've learned and this sprint? Please explain why!
      useReducer hooks.  They seem to be the least convoluted by far. 