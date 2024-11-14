import s from './LoaderScreen.module.scss'

export function LoaderScreen() {
  return (
    <div className={s.wrapper}>
      <div className={s.profileMainLoader}>
        <div className={s.loader}>
          <svg
            className={s.circularLoader}
            viewBox="25 25 50 50"
          >
            <circle
              className={s.loaderPath}
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="#70c542"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
