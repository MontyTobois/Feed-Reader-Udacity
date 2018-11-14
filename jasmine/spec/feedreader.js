/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against mine application.
 */

$(function() {
  /* This is my first test suite - a test suite just contains
   * a related set of tests. This suite is all about the RSS
   * feeds definitions, the allFeeds variable in our application.
   */
  describe('RSS Feeds', function() {
    /* Checks allFeeds variable has been defined and that it is not
    empty.*/
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });


    /* A test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */

    it('url defined', function() {
      allFeeds.forEach(feed => {
        expect(feed.url).toBeDefined();
        expect(feed.url.length).not.toBe(0);
      })
    });


    /* A  test that loops through each feed
     * in the allFeeds object and ensures it has a Name defined
     * and that the Name is not empty.
     */
    it('name defined', function() {
      for (let feed of allFeeds) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      }
    });
  });

  describe('The menu', function() {

    /* A test that ensures the menu element is
     * hidden by default.
     */

    it('hidden by default', function() {
      const body = document.querySelector('body');
      expect(body.classList.contains('menu-hidden')).toBe(true);
    });

    /* A test that ensures the menu changes
     * visibility when the menu icon is clicked.
     * The menu is display when
     * clicked and it hides when clicked again.
     */
    it('toggles on and off', function() {
      const body = document.querySelector('body');
      const menuIcon = document.querySelector('.menu-icon-link');
      menuIcon.click();
      expect(body.classList.contains('menu-hidden')).toBe(false);
      menuIcon.click();
    });
  });


  describe('Initial Entries', function() {

    /* A test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     */

    beforeEach(function(done) {
      loadFeed(0, done)
    });

    it('init and complete', function() {
      const feed = document.querySelectorAll('.feed .entry');
      expect(feed.length).toBeGreaterThan(0);
    });
  });

  describe('New Feed Selection', function() {
    const feed = document.querySelector('.feed');
    const firstFeed = [];

    /* A test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */

    beforeEach(function(done) {
      loadFeed(0, function() {
        Array.from(feed.children).forEach(function(entry) {
          firstFeed.push(entry.innerText);
          loadFeed(1, function() {
            done();
          })
        })
      })
    });

    it('gets a different feed', function() {
      Array.from(feed.children).forEach(function(entry, index) {
        expect(entry.innerText === firstFeed[index]).toBe(false);
      });
    });
  });
}());
