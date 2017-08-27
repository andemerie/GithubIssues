import { displayAll } from '../utils';
import TOKEN from '../secret';
import defaultData from '../data';

export function fetchIssues() {
  return fetch(`https://api.github.com/repos/andemerie/01_git_task/issues?access_token=${TOKEN}&state=all`)
    .then(response => response.json())
    .then(data => (Array.isArray(data) ? data : defaultData))
    .then(data => displayAll(data));
}

export function closeIssue(id) {
  return new Promise(resolve => resolve({id}));
}

export function addNewIssue(data) {
  return new Promise(resolve => resolve({
    id: data[data.length - 1].id + 1,
    title: 'New issue',
    state: 'open'
  }));
}

export function searchText(text) {
  return new Promise(resolve => resolve({text}));
}

export function setCurrentTab() {
  return new Promise(resolve => resolve('open'));
}

export function showOpenTab() {
  return new Promise(resolve => resolve('open'));
}

export function showClosedTab() {
  return new Promise(resolve => resolve('closed'));
}
