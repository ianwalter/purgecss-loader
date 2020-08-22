workflow "CI" {
  on = "push"
  resolves = ["Lint", "Test"]
}

action "Install" {
  uses = "docker://node:12@sha256:bb54cd11ed0461bc76889f37663f081aae00ff9efe176eb915217e5e99c8c319"
  runs = "yarn"
}

action "Lint" {
  uses = "docker://node:12@sha256:bb54cd11ed0461bc76889f37663f081aae00ff9efe176eb915217e5e99c8c319"
  needs = ["Install"]
  runs = "yarn"
  args = "lint"
}

action "Test" {
  uses = "docker://node:12@sha256:bb54cd11ed0461bc76889f37663f081aae00ff9efe176eb915217e5e99c8c319"
  needs = ["Install"]
  runs = "yarn"
  args = "test"
}
