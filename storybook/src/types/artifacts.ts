// Trowel Artifact Types
export type ArtifactType =
    'announcement'
  | 'author'
  | 'award'
  | 'birthday'
  | 'bug'
  | 'checkin'
  | 'code'
  | 'codepen'
  | 'comment'
  | 'competition'
  | 'cudos'
  | 'insight'
  | 'education'
  | 'event'
  | 'facebook'
  | 'gaming'
  | 'gift'
  | 'google'
  | 'hardware'
  | 'instagram'
  | 'job'
  | 'lgtm'
  | 'linkedin'
  | 'literature'
  | 'medium'
  | 'note'
  | 'opensource' 
  | 'photo'
  | 'podcast'
  | 'promotion'
  | 'share'
  | 'shopping'
  | 'slack'
  | 'twitter'
  | 'user'
  | 'video';

const artifactTypesToIcons = {
  announcement: 'bullhorn',
  author: 'pencil',
  award: 'certificate',
  birthday: 'birthday-cake',
  bug: 'bug',
  checkin: 'map-marker',
  code: 'code',
  codepen: 'codepen',
  comment: 'comment',
  competition: 'trophy',
  cudos: 'fire',
  insight: 'lightbulb-o',
  education: 'graduation-cap',
  event: 'star',
  facebook: 'facebook',
  gaming: 'gamepad',
  gift: 'gift',
  google: 'google',
  hardware: 'laptop',
  instagram: 'instagram',
  job: 'suitcase',
  lgtm: 'thumbs-up',
  linkedin: 'linkedin',
  literature: 'book',
  medium: 'medium',
  note: 'sticky-note',
  opensource: 'github',
  photo: 'photo',
  podcast: 'podcast',
  promotion: 'level-up',
  share: 'share',
  shopping: 'credit-card',
  slack: 'slack',
  twitter: 'twitter',
  user: 'user',
  video: 'video-camera'
};

export { artifactTypesToIcons };