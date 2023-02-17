It is recomended to use this functionalities for large app with a huge of data to render on a list for example becouse in simple projects you don't need it.

Memo: 
    Memorize a componente
    When props changes it will memorize again
    Avoid Re-renders
    Better use when a list have many elements with APi calls
    Whit small components chicos it's not recomended use Memo, use in heavy process.

useMemo:
    Memorize a calculated value
    Computed properties
    Heavy process
    It is use with optimization proposes of non simple process, this make the app slow.

useCallback:
    Memorize a function to define this one for each render.
    Use always when you pass a function as arg of one efect.
    Use whenever it pass a function trought props to a memorized component.
    

### Install and run

yarn install && yarn start


