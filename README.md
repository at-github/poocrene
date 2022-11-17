## Launch the counter
Notes: By default, the script will try to find a `logs` folder into the project,
and display the fifth popular ids
```Shell
npm start
```

You can specify logs path by adding optional parameter `path`

```Shell
npm start -- path=your-path
```

You can specify how many popular ids you want to see

```Shell
npm start -- count=10
```

## Launch the tests
`npm` was used to perform ES import module and for jest _TU_ framework.
Be sure `jest` is installed :
```Shell
npm install
```
then
```Shell
npm test
```

## Result
Hope it's OK
```Shell
┌─────────┬───────┬───────┐
│ (index) │  id   │ count │
├─────────┼───────┼───────┤
│    0    │ '413' │  105  │
│    1    │ '505' │  102  │
│    2    │ '473' │  97   │
│    3    │ '512' │  96   │
│    4    │ '991' │  95   │
└─────────┴───────┴───────┘
```
