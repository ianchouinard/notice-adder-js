# notice-adder-js
Node program to automagically add a notice comment to the top of all JS (or ts, dart) files in a directory.
Was created for adding copyright notices in bulk to files regardless of IDE used.

## Works but still in progress and needs testing
Notice adder takes 2 parameters
* **target directory** : String: Directory with js/ts/dart files that will get prepended with notice comments.
* **message** : String: Message that is written in the notice comment.

### from terminal or package.json
```bash
node notice-adder.js ./directory-to-add-notices-to my_copyright_notice
```

### from javascript
```javascript
const noticeAdder = require('notice-adder');

noticeAdder('./directory-to-add-notices-to', 'my copyright notice');
```
