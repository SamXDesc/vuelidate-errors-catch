# Vuelidate Errors Catch

**Package unstable, working on it.**
For now, the main language is **only pt-BR**.

The main idea from this package is generate error messages with the validation schema provided by vuelidate. It's a personal package (and initially open because I don't want to pay just to make it private) that reached the mínimum viable product for my personal use, but, thinking better, I believe that this can grow and solve problems from other people too.

If you want to contribute, please, send a pull request.

How to use:

```
npm install vuelidate-errors-catch
```

Then import and attach to Vue using Vue.use:
```
import VuelidateErrorsCatch from 'vuelidate-errors-catch'

Vue.use(VuelidateErrorsCatch)
```

And then, use it into the component:
```
<input v-model="test">
<div v-for="(message, index) in $extractor($v.test)" :key="index">
    {{ message }}
</div>
```
