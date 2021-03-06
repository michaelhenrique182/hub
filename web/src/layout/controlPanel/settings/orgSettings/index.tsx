import isUndefined from 'lodash/isUndefined';
import React from 'react';

import { Section } from '../../../../types';
import { CONTROL_PANEL_SECTIONS } from '../../../../utils/data';
import SectionPanel from '../../../common/SectionPanel';
import WebhooksSection from '../webhooks';
import ProfileSection from './profile';

interface Props {
  subsection?: string;
  onAuthError: () => void;
  onSubMenuItemClick: (name: string) => void;
}

const OrganizationSettingsSection = (props: Props) => {
  const section = CONTROL_PANEL_SECTIONS['org'].find((sect: Section) => sect.name === 'settings');
  if (isUndefined(section) || isUndefined(section.subsections)) return null;

  return (
    <SectionPanel
      defaultSection={props.subsection || 'profile'}
      onSectionChange={props.onSubMenuItemClick}
      sections={section.subsections}
      content={{ profile: <ProfileSection {...props} />, webhooks: <WebhooksSection {...props} /> }}
    />
  );
};

export default OrganizationSettingsSection;
