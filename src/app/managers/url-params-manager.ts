/**
 * Class for updating and listening to changes in URL pathname.
 * Need an abstraction allow updating the URL path
 * that also allows for components to react to changes/updates.
 *
 * Implementing with EventTarget to allow for consumers to listen
 * with `addEventListener`
 *
 * Unsure of browser compat with this
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Event/target
 */
class UrlParamsManager extends EventTarget {
  private events: { update: "update" };
  private eventNameSpace: string;

  constructor() {
    super();
    this.eventNameSpace = "urlParamsManager";
    this.events = {
      update: "update",
    };
  }

  private createEvent(operation: string) {
    return new Event(`${this.eventNameSpace}:${operation}`);
  }

  update(path: string) {
    window.location.pathname = path;
    const updateEvent = this.createEvent(
      this.events.update
    );
    this.dispatchEvent(updateEvent);
  }
}

export default new UrlParamsManager();
