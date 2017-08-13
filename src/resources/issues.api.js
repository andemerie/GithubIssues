import { displayAll } from './utils';

export function fetchIssues() {
  const TOKEN = '35e4f74accbceefc27e271ead5d2848cdb3bdbc9';

  return fetch(`https://api.github.com/repos/andemerie/01_git_task/issues?access_token=${TOKEN}&state=all`)
    .then(response => response.json())
    .then(data => displayAll(data));
}

export function closeIssue(id) {
  return new Promise(resolve => resolve({id}));
}
