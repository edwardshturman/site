// The transition type for navigating between Workshop and a project's
// timeline; it scopes the animations in ./transitions.css
export const WORKSHOP_TRANSITION = "workshop"

// A <ViewTransition> class that only applies when navigating within Workshop,
// not e.g. when arriving from another page
export const onlyInWorkshop = (className: string) => ({
  [WORKSHOP_TRANSITION]: className,
  default: "none"
})
