/* eslint-disable arrow-body-style */
import React, { memo } from 'react';
import { Button } from 'rsuite';
import TimeAgo from 'timeago-react';
import { useCurrentRoom } from '../../../context/current-room.context';
import { useHover } from '../../../context/custom-hooks';
import { auth } from '../../../misc/firebase';
import PresenceDot from '../../PresenceDot';
import ProfileAvatar from '../../ProfileAvatar';
import IconBtnControl from './IconBtnControl';
import ProfileInfoBtnModal from './ProfileInfoBtnModal';

const MessageItem = ({ message, handleAdmin }) => {
  const { author, createdAt, text } = message;

  const [selfRef, isHover] = useHover();

  const isAdmin = useCurrentRoom(v => v.isAdmin);
  const admins = useCurrentRoom(v => v.admins);
  const isMsgAuthorAdmin = admins.includes(author.uid);
  const isAuthor = auth.currentUser.uid === author.uid;
  const canGrantAdmin = isAdmin && !isAuthor;

  return (
    <li
      className={`padded mb-1 cursor-pointer ${isHover ? 'bg-black-02' : ''}`}
      ref={selfRef}
    >
      <div className="d-flex align-items-center mb-1 font-bolder">
        <PresenceDot uid={author.uid} />
        <ProfileAvatar
          src={author.avatar}
          name={author.name}
          className="ml-1"
          size="xs"
        />

        <ProfileInfoBtnModal
          profile={author}
          appearance="link"
          className="ml-1 p-0 text-black"
        >
          {canGrantAdmin && (
            <Button block color="blue" onClick={() => handleAdmin(author.uid)}>
              {isMsgAuthorAdmin
                ? 'Remove admin permission'
                : 'Give admin permission for this room'}
            </Button>
          )}
        </ProfileInfoBtnModal>
        <TimeAgo
          className="font-normal text-black-45 ml-2"
          datetime={createdAt}
        />
        <IconBtnControl
          // eslint-disable-next-line no-constant-condition
          {...(true ? { color: 'red' } : {})}
          isVisible
          iconName="heart"
          tooltip="Like this message"
          onClick={() => {}}
          badgeContent={5}
        />
      </div>
      <div>
        <span className="word-break-all">{text}</span>
      </div>
    </li>
  );
};

export default memo(MessageItem);
