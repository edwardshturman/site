import styles from './Checkbox.module.css'

export default function CheckboxExperiment() {
  return (
    <>
      <h1>Checkbox experiment</h1>
      <p>Styling checkboxes for <code>remark-gfm</code></p>
      <input type="checkbox" className={styles.checkbox} name="checkbox" />
    </>
  )
}
