// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

// <126. What's an Eventing System?>
// 📎 open events/example.html

// <127. A Tip on Events>
// <128. Events Solution>
class Events {
  constructor() {
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if (this.events[eventName]) {
      // this.events[eventName] = [];
      // -> that still leaves this empty array
      delete this.events[eventName];
    }
  }
}

module.exports = Events;

// (12) It is really important to remember that we should be able to call the on method multiple times with the same eventName and register multiple callbacks to the same eventName. Clearly, we're going to need some type of storage mechanism in the class to somehow relate an eventName to a list of different callbacks.
// -> ✍️ I'm going to suggest that maybe we create a plain JavaScript object where the keys of the object are all the different event names that have been registered with our events library; and then the values for each of these keys could be an array that contains all the different callbacks that we should call.

// 📦 this.events
// 'click' -> callback/callback/callback
// 'hover' -> callback
// 'exit' -> callback/callback
// -> Then, whenever one of these events are triggered, we can iterate through the list of callbacks and trigger each one in line.

// (17) I want to take this eventName and add it as sa key to the events object; so we want to make sure that this will contain a value of an array. And if it contains an array, we should take this callback right here and add the callback to the array.
// However, we also need to consider the case in which this might be the first event that is added to the events object for a particular key.
// -> If that's the case, then there's probably no array here already and we'll need to create a new array.

// (26) as long as there is some value there ready for us to iterate over, iterate over it and execute every callback in that array

// (36) That will remove that entire key and the value that exists there or that entire array of callbacks.
