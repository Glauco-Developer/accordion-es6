(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Accordion =
/*#__PURE__*/
function () {
  function Accordion(accordion, heading) {
    _classCallCheck(this, Accordion);

    this.accordion = accordion;
    this.heading = heading;
  }

  _createClass(Accordion, [{
    key: "showContent",
    value: function showContent() {
      var _this = this;

      var accordion = document.getElementById(this.accordion);
      var heading = accordion.querySelectorAll(this.heading);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var item = _step.value;
          item.addEventListener('click', function () {
            // Call hideItems method
            _this.hideItems(item, heading);

            item.classList.toggle('active');

            if (item.classList.contains('active')) {
              // Aria attributes
              item.setAttribute('aria-expanded', 'true');
              item.nextElementSibling.setAttribute('aria-hidden', 'false'); // Scroll into view

              item.scrollIntoView({
                behavior: 'smooth'
              });
            }
          });
        };

        for (var _iterator = heading[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      ;
    }
  }, {
    key: "hideItems",
    value: function hideItems(item, heading) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = heading[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var el = _step2.value;
          if (el !== item) el.classList.contains('active') ? el.classList.remove('active') : null; // Aria attributes

          el.getAttribute('aria-expanded') ? el.setAttribute('aria-expanded', 'false') : null;
          el.nextElementSibling.setAttribute('aria-hidden', 'true');
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      ;
    }
  }]);

  return Accordion;
}();

exports.Accordion = Accordion;

},{}],2:[function(require,module,exports){
"use strict";

var _accordion = require("./accordion");

var accordion = new _accordion.Accordion('accordion', '.heading');
accordion.showContent();

},{"./accordion":1}]},{},[1,2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYWNjb3JkaW9uLmpzIiwic3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7SUNBYSxTOzs7QUFDVCxxQkFBWSxTQUFaLEVBQXVCLE9BQXZCLEVBQWdDO0FBQUE7O0FBQzdCLFNBQUssU0FBTCxHQUFpQixTQUFqQjtBQUNBLFNBQUssT0FBTCxHQUFlLE9BQWY7QUFDRjs7OztrQ0FFYTtBQUFBOztBQUVYLFVBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLEtBQUssU0FBN0IsQ0FBbEI7QUFDQSxVQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsZ0JBQVYsQ0FBMkIsS0FBSyxPQUFoQyxDQUFoQjtBQUhXO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsY0FLRCxJQUxDO0FBT1IsVUFBQSxJQUFJLENBQUMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtBQUVuQztBQUNBLFlBQUEsS0FBSSxDQUFDLFNBQUwsQ0FBZSxJQUFmLEVBQXFCLE9BQXJCOztBQUVBLFlBQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxNQUFmLENBQXNCLFFBQXRCOztBQUVBLGdCQUFHLElBQUksQ0FBQyxTQUFMLENBQWUsUUFBZixDQUF3QixRQUF4QixDQUFILEVBQXNDO0FBRWxDO0FBQ0EsY0FBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixlQUFsQixFQUFrQyxNQUFsQztBQUNBLGNBQUEsSUFBSSxDQUFDLGtCQUFMLENBQXdCLFlBQXhCLENBQXFDLGFBQXJDLEVBQW1ELE9BQW5ELEVBSmtDLENBTWxDOztBQUNBLGNBQUEsSUFBSSxDQUFDLGNBQUwsQ0FBb0I7QUFBRSxnQkFBQSxRQUFRLEVBQUU7QUFBWixlQUFwQjtBQUNIO0FBRUYsV0FqQkQ7QUFQUTs7QUFLWCw2QkFBa0IsT0FBbEIsOEhBQTBCO0FBQUE7QUFvQnpCO0FBekJVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBeUJWO0FBQ0g7Ozs4QkFFUyxJLEVBQU0sTyxFQUFTO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQ3JCLDhCQUFnQixPQUFoQixtSUFBd0I7QUFBQSxjQUFkLEVBQWM7QUFDcEIsY0FBRyxFQUFFLEtBQUssSUFBVixFQUNJLEVBQUUsQ0FBQyxTQUFILENBQWEsUUFBYixDQUFzQixRQUF0QixJQUFrQyxFQUFFLENBQUMsU0FBSCxDQUFhLE1BQWIsQ0FBb0IsUUFBcEIsQ0FBbEMsR0FBa0UsSUFBbEUsQ0FGZ0IsQ0FJcEI7O0FBQ0EsVUFBQSxFQUFFLENBQUMsWUFBSCxDQUFnQixlQUFoQixJQUFtQyxFQUFFLENBQUMsWUFBSCxDQUFnQixlQUFoQixFQUFnQyxPQUFoQyxDQUFuQyxHQUE4RSxJQUE5RTtBQUNBLFVBQUEsRUFBRSxDQUFDLGtCQUFILENBQXNCLFlBQXRCLENBQW1DLGFBQW5DLEVBQWlELE1BQWpEO0FBQ0Y7QUFSbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRbkI7QUFDTDs7Ozs7Ozs7Ozs7QUMzQ0w7O0FBRUEsSUFBTSxTQUFTLEdBQUcsSUFBSSxvQkFBSixDQUFjLFdBQWQsRUFBMEIsVUFBMUIsQ0FBbEI7QUFDQSxTQUFTLENBQUMsV0FBViIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBjbGFzcyBBY2NvcmRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGFjY29yZGlvbiwgaGVhZGluZykge1xuICAgICAgIHRoaXMuYWNjb3JkaW9uID0gYWNjb3JkaW9uO1xuICAgICAgIHRoaXMuaGVhZGluZyA9IGhlYWRpbmc7XG4gICAgfVxuICAgIFxuICAgIHNob3dDb250ZW50KCkge1xuICAgICAgIFxuICAgICAgIGNvbnN0IGFjY29yZGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuYWNjb3JkaW9uKTtcbiAgICAgICBjb25zdCBoZWFkaW5nID0gYWNjb3JkaW9uLnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5oZWFkaW5nKTtcblxuICAgICAgIGZvcihjb25zdCBpdGVtIG9mIGhlYWRpbmcpeyAgICAgIFxuXG4gICAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIENhbGwgaGlkZUl0ZW1zIG1ldGhvZFxuICAgICAgICAgICAgdGhpcy5oaWRlSXRlbXMoaXRlbSwgaGVhZGluZylcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gXG4gICAgICAgICAgICBpZihpdGVtLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcblxuICAgICAgICAgICAgICAgIC8vIEFyaWEgYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywndHJ1ZScpO1xuICAgICAgICAgICAgICAgIGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCdmYWxzZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIFNjcm9sbCBpbnRvIHZpZXdcbiAgICAgICAgICAgICAgICBpdGVtLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnfSk7XG4gICAgICAgICAgICB9XG4gXG4gICAgICAgICAgfSk7XG4gICAgICAgfTtcbiAgICB9ICAgIFxuXG4gICAgaGlkZUl0ZW1zKGl0ZW0sIGhlYWRpbmcpIHtcbiAgICAgICAgZm9yKGNvbnN0IGVsIG9mIGhlYWRpbmcpeyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGVsICE9PSBpdGVtKVxuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgPyBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSA6IG51bGw7XG4gICAgICAgIFxuICAgICAgICAgICAgLy8gQXJpYSBhdHRyaWJ1dGVzXG4gICAgICAgICAgICBlbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA/IGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsJ2ZhbHNlJykgOiBudWxsO1xuICAgICAgICAgICAgZWwubmV4dEVsZW1lbnRTaWJsaW5nLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCd0cnVlJylcbiAgICAgICAgIH07XG4gICAgfVxuICAgIFxuIH0iLCJpbXBvcnQgeyBBY2NvcmRpb24gfSBmcm9tICcuL2FjY29yZGlvbic7XG5cbmNvbnN0IGFjY29yZGlvbiA9IG5ldyBBY2NvcmRpb24oJ2FjY29yZGlvbicsJy5oZWFkaW5nJyk7XG5hY2NvcmRpb24uc2hvd0NvbnRlbnQoKTsiXX0=
