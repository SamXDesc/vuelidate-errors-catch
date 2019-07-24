<template>
  <div class="grid">
    <div class="container">
      <div class="input-scope">
        <input
          type="text"
          id="name"
          placeholder="Nome"
          v-model="form.name"
          class="input"
          @blur="$v.form.name.$touch()"
          :class="$v.form.name.$error ? 'input-error' : ''"
        />

        <div v-if="$v.form.name.$error">
          <span class="input-message tomato" v-for="(error, idx) in $extractor($v.form.name)" :key="idx">{{ error }}</span>
        </div>
      </div>

      <div class="input-scope">
        <input
          type="text"
          id="lastname"
          placeholder="Sobrenome"
          v-model="form.lastname"
          class="input"
          @blur="$v.form.lastname.$touch()"
          :class="$v.form.lastname.$error ? 'input-error' : ''"
        />

        <div v-if="$v.form.lastname.$error">
          <span class="input-message tomato" v-for="(error, idx) in $extractor($v.form.lastname)" :key="idx">{{ error }}</span>
        </div>
      </div>

      <div class="input-scope">
        <input
          type="text"
          id="email"
          placeholder="E-mail"
          v-model="form.email"
          class="input"
          @blur="$v.form.email.$touch()"
          :class="$v.form.email.$error ? 'input-error' : ''"
        />

        <div v-if="$v.form.email.$error">
          <span class="input-message tomato" v-for="(error, idx) in $extractor($v.form.email)" :key="idx">{{ error }}</span>
        </div>
      </div>

      <div class="input-scope">
        <input
          type="text"
          id="confirmEmail"
          placeholder="Confirmar E-mail"
          v-model="form.confirmEmail"
          class="input"
          @blur="$v.form.confirmEmail.$touch()"
          :class="$v.form.confirmEmail.$error ? 'input-error' : ''"
        />

        <div v-if="$v.form.confirmEmail.$error">
          <span class="input-message tomato" v-for="(error, idx) in $extractor($v.form.confirmEmail)" :key="idx">{{ error }}</span>
        </div>
      </div>

      <div class="input-scope">
        <input
          type="text"
          id="document"
          placeholder="CPF"
          v-model="form.document"
          v-mask="'999.999.999-99'"
          class="input"
          @blur="$v.form.document.$touch()"
          :class="$v.form.document.$error ? 'input-error' : ''"
        />

        <div v-if="$v.form.document.$error">
          <span class="input-message tomato" v-for="(error, idx) in $extractor($v.form.document)" :key="idx">{{ `${error} ` }}</span>
        </div>
      </div>

      <div class="text-center">
        <button class="btn btn-primary" @click="confirm">Validate</button>
        <button class="btn" @click="reset">Reset</button>
      </div>

      <br>

      {{ $v }}

    </div>
  </div>
</template>

<script>
import { required, requiredIf, between, email, sameAs } from 'vuelidate/lib/validators'
import { document } from '../validators'
import AwesomeMask from 'awesome-mask'

export default {
  name: 'hello-world',

  directives: {
    'mask': AwesomeMask
  },

  data: () => {
    return {
      form: {
        name: '',
        email: '',
        confirmEmail: '',
        lastname: '',
        document: ''
      }
    }
  },

  methods: {
    confirm () {
      this.$v.form.$touch()

      if (this.$v.form.$invalid) {
        alert('Form invalid')
        return
      }

      alert('Validated with success')
    },

    reset () {
      this.$v.form.$reset()
    }
  },

  validations: {
    form: {
      name: { required, between: between(3, 6) },
      lastname: {
        requiredIf: requiredIf(param => param.name.length > 0)
      },
      email: { required, email },
      confirmEmail: { sameAs: sameAs('email') },
      document: { required, document }
    }
  }
}
</script>

<style>
  .text-left {
    text-align: left;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .grid {
    display: flex;
    justify-content: center;
  }

  .container {
    width: 50%;
  }

  .input-scope {
    margin: 0.5em 0;
  }

  .input {
    margin: 0.1em 0;
    padding: 0.6em 0.2em;
    font-size: 1em;
    width: calc(100% - 0.5em);
    border-radius: 4px;
    border: 1px solid #a3a3a3;
  }

  .input-message {
    font-size: 13px;
  }

  .input:focus {
    outline: none;
    box-shadow: 0 1px 2px #818181;
  }

  .input-error {
    border: 1px solid #ff6347
  }

  .btn {
    border: none;
    outline: none;
    padding: 0.7em;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
  }

  .btn-primary {
    background-color: #34a1eb;
    color: #ffffff;
  }

  .tomato {
    color: #ff6347
  }

  .primary {
    color: #34a1eb;
  }
</style>
