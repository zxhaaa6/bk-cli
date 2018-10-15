# bk-cli
🛠️ Cli Tooling for Rest/GraphQL backend Development.

Note that: this cli tooling just only support little features now, it is also on contributing...

| - | Typescript | Javascript |
| :-------------: | :-------------: | :-------------: |
| GraphQL Graphql-yoga  | X | - |
| GraphQL Apollo Express | X | - |
| GraphQL Apollo Koa | - | - |
| REST Express | - | - |
| REST Koa | - | - |
| REST Egg | - | - |
| REST Nest | - | - |

[![asciicast](https://asciinema.org/a/y2HKfSSsJjVA4Uo17JgNPqs0j.png)](https://asciinema.org/a/y2HKfSSsJjVA4Uo17JgNPqs0j)

## Installation
Install CLI globally with
```
$ npm install -g bk-cli
```
Now you can run CLI using following command anywhere

```
$ bk-cli
```

## Usage

```
$ bk-cli -h

Usage: bk-cli init [project-name]

Options:

  -v, --version        output the version number
  -h, --help           output usage information

Commands:

  init <project_name>  create a new project with giving name
  *                    you can create a new project quickly

Examples:

    # create a new project with an official template
    $ bk-cli init my-project

```
